/*
  Appellation: mdx-components <module>
  Contrib: @FL03
*/
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
