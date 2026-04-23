/**
 * Liqway Medical – Centralized API Service (Axios)
 *
 * ONE place for the base URL and all endpoint functions.
 * Change BASE_URL here and every screen updates automatically.
 *
 * Android emulator  → http://10.0.2.2:8000
 * iOS simulator     → http://localhost:8000
 * Physical device   → http://<your-local-ip>:8000
 */

import axios, { AxiosError } from "axios";

// ─── Axios instance ──────────────────────────────────────────────────────────

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_BASE_URL,
  timeout: 10000, // 10 seconds – if backend hangs, request is cancelled
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// ─── Request interceptor ─────────────────────────────────────────────────────
// Runs before every request. Perfect place to attach auth tokens later.
//
// Example (when you add login):
//   const token = await AsyncStorage.getItem("token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;

api.interceptors.request.use(
  (config) => {
    // TODO: attach auth token here when you add login
    return config;
  },
  (error) => Promise.reject(error)
);

// ─── Response interceptor ────────────────────────────────────────────────────
// Runs after every response. Normalises errors into a single readable message.
// Axios already throws on 4xx/500 – we just make the message clean.

api.interceptors.response.use(
  (response) => response, // 2xx – pass through untouched
  (error: AxiosError<{ detail?: string; message?: string }>) => {
    let message: string;

    if (error.response) {
      // Server responded with a non-2xx status (404, 500, etc.)
      const data = error.response.data;
      message =
        data?.detail ??            // FastAPI validation / custom errors
        data?.message ??           // generic message field
        error.response.statusText ??
        `Server error ${error.response.status}`;
    } else if (error.request) {
      // Request was made but no response received (wrong IP, server down, no internet)
      message =
        "No response from server – check your IP address and make sure the backend is running.";
    } else {
      // Something went wrong setting up the request
      message = error.message ?? "Unexpected error";
    }

    return Promise.reject(new Error(message));
  }
);

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: number;
}

export interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
}

export interface ApiDocument {
  id: number;
  file_name: string;
  file_url: string;
}

export interface Prescription {
  id: number;
  patient_id: number;
  doctor_id: number;
  date: string;
  title: "Prescription" | "Report";
  detail: string;
  doctor_name: string;
  documents: ApiDocument[];
}

// ─── Doctor routes ───────────────────────────────────────────────────────────

export const doctorApi = {
  /** GET /api/v1/doctors */
  getAll: async (): Promise<Doctor[]> => {
    const { data } = await api.get<Doctor[]>("/doctors");
    return data;
  },

  /** GET /api/v1/doctors/:id */
  getById: async (id: number): Promise<Doctor> => {
    const { data } = await api.get<Doctor>(`/doctors/${id}`);
    return data;
  },

  /** GET /api/v1/doctors – filtered by specialization client-side */
  getBySpecialization: async (specialization: string): Promise<Doctor[]> => {
    const { data } = await api.get<Doctor[]>("/doctors");
    return data.filter((d) => d.specialization === specialization);
  },
};

// ─── Patient routes ──────────────────────────────────────────────────────────

export const patientApi = {
  /** GET /api/v1/patients */
  getAll: async (): Promise<Patient[]> => {
    const { data } = await api.get<Patient[]>("/patients");
    return data;
  },

  /** GET /api/v1/patients/:id */
  getById: async (id: number): Promise<Patient> => {
    const { data } = await api.get<Patient>(`/patients/${id}`);
    return data;
  },
};

// ─── Prescription routes ──────────────────────────────────────────────────────

export const prescriptionApi = {
  /** GET /api/v1/prescriptions */
  getAll: async (): Promise<Prescription[]> => {
    const { data } = await api.get<Prescription[]>("/prescriptions");
    return data;
  },

  /** GET /api/v1/prescriptions/patient/:patientId */
  getByPatient: async (patientId: number): Promise<Prescription[]> => {
    const { data } = await api.get<Prescription[]>(
      `/prescriptions/patient/${patientId}`
    );
    return data;
  },
};

// ─── Document routes ──────────────────────────────────────────────────────────

export const documentApi = {
  /** GET /api/v1/documents/prescription/:prescriptionId */
  getByPrescription: async (prescriptionId: number): Promise<ApiDocument[]> => {
    const { data } = await api.get<ApiDocument[]>(
      `/documents/prescription/${prescriptionId}`
    );
    return data;
  },
};