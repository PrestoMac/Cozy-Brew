import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';

const Login = () => {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-amber-900 text-center mb-6">Welcome Back</h1>
        <Auth
          supabaseClient={supabase}
          providers={[]}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#d97706',
                  brandAccent: '#b45309',
                },
              },
            },
          }}
          theme="light"
        />
      </div>
    </div>
  );
};

export default Login;