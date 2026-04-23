import AsyncStorage from '@react-native-async-storage/async-storage';

// ─── TYPES ─────────────────────────────────────────────────
export type Product = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  category: string;
};

export type DeliveryRecord = {
  id: string;
  destination: string;
  driver: string;
  distance: string;
  eta: string;
  stops: number;
  status: 'Preparing' | 'In Transit' | 'Arrived' | 'Completed';
  fuelCost: number;
  createdAt: string;
  routeStops: string[];
};

export type RouteHistory = {
  id: string;
  stops: string[];
  totalDist: number;
  totalCost: number;
  savings: number;
  timestamp: string;
};

// ─── STORAGE KEYS ──────────────────────────────────────────
const KEYS = {
  INVENTORY: 'jayca_inventory',
  DELIVERIES: 'jayca_deliveries',
  ROUTE_HISTORY: 'jayca_routes',
};

// ─── DEFAULT PRODUCTS (Bond Paper Supplier) ────────────────
export const DEFAULT_PRODUCTS: Product[] = [
  { id: 'P001', name: 'Short Bond Paper (A4)', quantity: 500, price: 185, category: 'Bond Paper' },
  { id: 'P002', name: 'Long Bond Paper (Legal)', quantity: 350, price: 210, category: 'Bond Paper' },
  { id: 'P003', name: 'Yellow Pad Paper', quantity: 120, price: 45, category: 'Pad Paper' },
  { id: 'P004', name: 'Colored Bond Paper (Assorted)', quantity: 80, price: 250, category: 'Bond Paper' },
  { id: 'P005', name: 'Intermediate Pad Paper', quantity: 200, price: 30, category: 'Pad Paper' },
  { id: 'P006', name: 'Specialty Cardstock A4', quantity: 15, price: 320, category: 'Specialty' },
  { id: 'P007', name: 'Photo Paper (Glossy A4)', quantity: 0, price: 280, category: 'Specialty' },
];

// ─── INVENTORY ─────────────────────────────────────────────
export async function getInventory(): Promise<Product[]> {
  try {
    const stored = await AsyncStorage.getItem(KEYS.INVENTORY);
    if (stored) return JSON.parse(stored);
    // First time — seed with defaults
    await AsyncStorage.setItem(KEYS.INVENTORY, JSON.stringify(DEFAULT_PRODUCTS));
    return DEFAULT_PRODUCTS;
  } catch {
    return DEFAULT_PRODUCTS;
  }
}

export async function saveInventory(products: Product[]): Promise<void> {
  try {
    await AsyncStorage.setItem(KEYS.INVENTORY, JSON.stringify(products));
  } catch (e) {
    console.warn('Failed to save inventory:', e);
  }
}

// ─── DELIVERIES ────────────────────────────────────────────
export async function getDeliveries(): Promise<DeliveryRecord[]> {
  try {
    const stored = await AsyncStorage.getItem(KEYS.DELIVERIES);
    if (stored) return JSON.parse(stored);
    return [];
  } catch {
    return [];
  }
}

export async function saveDelivery(delivery: DeliveryRecord): Promise<void> {
  try {
    const existing = await getDeliveries();
    existing.unshift(delivery); // newest first
    // Keep max 50 records
    const trimmed = existing.slice(0, 50);
    await AsyncStorage.setItem(KEYS.DELIVERIES, JSON.stringify(trimmed));
  } catch (e) {
    console.warn('Failed to save delivery:', e);
  }
}

export async function updateDeliveryStatus(
  id: string,
  status: DeliveryRecord['status']
): Promise<void> {
  try {
    const deliveries = await getDeliveries();
    const updated = deliveries.map(d =>
      d.id === id ? { ...d, status } : d
    );
    await AsyncStorage.setItem(KEYS.DELIVERIES, JSON.stringify(updated));
  } catch (e) {
    console.warn('Failed to update delivery:', e);
  }
}

// ─── ROUTE HISTORY ─────────────────────────────────────────
export async function getRouteHistory(): Promise<RouteHistory[]> {
  try {
    const stored = await AsyncStorage.getItem(KEYS.ROUTE_HISTORY);
    if (stored) return JSON.parse(stored);
    return [];
  } catch {
    return [];
  }
}

export async function saveRouteHistory(route: RouteHistory): Promise<void> {
  try {
    const existing = await getRouteHistory();
    existing.unshift(route);
    const trimmed = existing.slice(0, 30);
    await AsyncStorage.setItem(KEYS.ROUTE_HISTORY, JSON.stringify(trimmed));
  } catch (e) {
    console.warn('Failed to save route history:', e);
  }
}
