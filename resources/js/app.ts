import { createLunaApp } from '@laraxgram/vue3';

const appName = import.meta.env.VITE_APP_NAME || 'LaraGram';

createLunaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    layout: () => null,
    progress: {
        color: '#2aabee',
    },
});
