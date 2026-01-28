import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { Service } from '@/constants';

interface BookingContextType {
    selectedServices: Service[];
    addService: (service: Service) => void;
    removeService: (serviceName: string) => void;
    toggleService: (service: Service) => void;
    clearServices: () => void;
    isServiceSelected: (serviceName: string) => boolean;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedServices, setSelectedServices] = useState<Service[]>([]);

    const addService = (service: Service) => {
        setSelectedServices((prev) => {
            if (prev.some((s) => s.name === service.name)) return prev;
            return [...prev, service];
        });
    };

    const removeService = (serviceName: string) => {
        setSelectedServices((prev) => prev.filter((s) => s.name !== serviceName));
    };

    const toggleService = (service: Service) => {
        if (selectedServices.some((s) => s.name === service.name)) {
            removeService(service.name);
        } else {
            addService(service);
        }
    };

    const clearServices = () => {
        setSelectedServices([]);
    };

    const isServiceSelected = (serviceName: string) => {
        return selectedServices.some((s) => s.name === serviceName);
    };

    return (
        <BookingContext.Provider
            value={{
                selectedServices,
                addService,
                removeService,
                toggleService,
                clearServices,
                isServiceSelected,
            }}
        >
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = (): BookingContextType => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};
