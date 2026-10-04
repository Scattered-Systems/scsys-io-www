import { permanentRedirect } from 'next/navigation';

/** Keep the requested singular entry on the established policy URL. */
export default function Term() {
  permanentRedirect('/terms');
}
