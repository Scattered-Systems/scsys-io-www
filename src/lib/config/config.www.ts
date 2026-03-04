/**
 * Created At: 2025.08.17:14:19:15
 * @author - @FL03
 * @file - www.ts
 */
import { Url } from 'url';

type Href = string | URL | Url;

type RouteParams = { [key: string]: string };
type QueryParams =
  | string[][]
  | URLSearchParams
  | Record<string, string | number | boolean>;

type RecordMeta = {
  name: string;
  href: Href;
  label: string;
  description?: string;
  icon?: string;
  url?: string;
};

type RecordBuilder = <TParams extends RouteParams, TQuery extends QueryParams>(
  params?: TParams,
  query?: TQuery,
) => RecordMeta;

type TreeRecord = RecordMeta | RecordBuilder;

type LinkTree = Record<string, TreeRecord>;

export const www: LinkTree = {
  home: {
    href: '/',
    label: 'Home',
    name: 'Home',
  },
  about: {
    href: '/about',
    label: 'About',
    name: 'About',
  },
  connect: {
    href: '/connect',
    label: 'Connect',
    name: 'Connect',
  },
  contact: {
    href: '/contact',
    label: 'Contact',
    name: 'Contact',
  },
  privacy: {
    href: '/privacy',
    label: 'Privacy Policy',
    name: 'Privacy',
  },
  terms: {
    href: '/terms',
    label: 'Terms of Service',
    name: 'Terms',
  },
};
