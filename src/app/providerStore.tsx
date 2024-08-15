'use client';

import { Provider } from 'react-redux';
import {reduxSagaStore} from '@/store';

export function Providers({ children }: { children: React.ReactNode }) {
    return <Provider store={reduxSagaStore}>{children}</Provider>;
}