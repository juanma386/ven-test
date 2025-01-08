// utils/environment.ts
export const getEndpointUrl = (): string => {
    const endpointUrl = process.env.ENDPOINT_URL; // Acceso a la variable

    if (!endpointUrl) {
        console.error('ENDPOINT_URL no está definida.');
        return ''; // O un valor por defecto
    }

    return endpointUrl;
};