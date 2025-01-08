import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useAuthRedirect = () => {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false); // Para evitar múltiples redirecciones
  const { pathname } = router;

  const checkAuth = () => {
    if (isRedirecting) return; // No redirigir si ya está en proceso

    const accessToken = localStorage.getItem('App.settings.access_token'); // Obtén el token del almacenamiento local

    // Evita la redirección si ya estás en la página de login o en el área de usuario
    const isAuthPage = pathname.startsWith('/auth'); // Rutas de autenticación (signin, signup, etc.)
    const isUserPage = pathname.startsWith('/user'); // Rutas del área privada de usuario

    if (!accessToken) {
      // Si no existe el token, y no estamos ya en la página de login, redirige a /auth
      if (!isAuthPage) {
        setIsRedirecting(true);
        router.push('/auth/signin');
      }
    } else {
      // Si el token existe, y no estamos ya en el área privada de usuario, redirige a /user
      if (!isUserPage) {
        setIsRedirecting(true);
        router.push('/user/dashboard');
      }
    }
  };

  // Ejecuta la verificación al montar
  useEffect(() => {
    checkAuth();
  }, [router]);

  return checkAuth; // Retorna la función en caso de querer llamarla manualmente
};

export default useAuthRedirect;
