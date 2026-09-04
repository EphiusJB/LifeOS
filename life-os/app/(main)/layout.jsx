import AuthGuard from '@/components/auth/AuthGuard';
// import { Sidebar } from '@/components/sidebar';
// import Sidebar from '@/components/sidebar';

export default function MainLayout({ children }) {
  return (
     <AuthGuard>
      <div className="flex h-screen overflow-hidden">
        {/* <Sidebar /> */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
     </AuthGuard>
  );
}