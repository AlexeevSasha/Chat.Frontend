import { useContext, useEffect } from 'react';
import { AppContext } from '../ContextProvider';

export const Layout = () => {
  const { socket } = useContext(AppContext);

  useEffect(() => {
    socket.on('connected', (event) => {
      console.log(event);
    });
  }, []);

  return (
    <div>
      <header>a</header>
      <section>asdasdf</section>
      <footer>asdfasdf</footer>
    </div>
  );
};
