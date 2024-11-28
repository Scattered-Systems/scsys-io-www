/*
  Appellation: not-found <module>
  Contrib: @FL03
*/
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
NotFound.displayName = 'NotFound';

export const runtime = 'edge';

export default NotFound;