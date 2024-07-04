import { Slot } from 'expo-router';
import { SessionProvider } from '../hooks/ctx';

export default function Root() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
