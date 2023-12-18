import { HttpInterceptorFn } from '@angular/common/http';

export const apiFoodInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url.includes('auth')) {
    return next(req);
  }
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDU0MDQ1Mzg1Yzk4ODhiYmM0NzI4OTRlYjk5Zjc0ZiIsInN1YiI6IjY1ODA2ZTViMDA1MDhhMDZiMzE1ZDFjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M7vqCOaYJ-FWsgF7qx_wYwnUfCUfoFGRAKObG44jTGI';

  const newReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
  return next(newReq);
};
