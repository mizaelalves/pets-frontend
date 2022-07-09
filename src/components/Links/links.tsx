import NextLink from 'next/link'

interface LinkProps{
  href: string;
  children: string | JSX.Element
}


export function Link (props: LinkProps){
  return (
    <NextLink href= {props.href}>
      <a {...props}>
        {props.children}
      </a>

    </NextLink>
  )
}