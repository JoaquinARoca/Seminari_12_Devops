export function messageHandler(message: string, level: 'info' | 'error') {
    console.log(`[${level.toUpperCase()}]: ${message}`);
}