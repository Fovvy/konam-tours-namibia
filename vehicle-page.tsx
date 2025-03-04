// Server Component for Vehicle Details
import React from 'react';
import { mockVehicles } from '@/app/lib/mockData';
import VehicleDetailClient from './VehicleDetailClient';

// This function is required for static exports 
export async function generateStaticParams() {
  return mockVehicles.map((vehicle) => ({
    id: vehicle.id,
  }));
}

export default function VehicleDetails({ params }: { params: { id: string } }) {
  const vehicle = mockVehicles.find((v) => v.id === params.id);

  if (!vehicle) {
    return <div className=min-h-screen flex items-center justify-center>Vehicle not found</div>;
  }

  return <VehicleDetailClient vehicle={vehicle} />;
}
