---
sidebar_position: 2
title: Getting started with Otterize
---

export const LinkButton = (props) => (
  <a
    {...props}
    style={{
      backgroundColor: 'var(--ifm-color-primary)',
      color: 'white',
      borderRadius: 5,
      paddingLeft: 5,
      paddingRight: 5,
      paddingBottom: 2,
      textDecoration: 'none',
      ...props.style,
    }}
  />
);


Otterize OSS implements intent-based access control in a single Kubernetes cluster.

:::tip Coming soon

Otterize Cloud adds visibility and operationalization, and supports multiple Kubernetes clusters 
as well as non-Kubernetes infrastructures. Read more in our [product page](https://otterize.com/product).

:::

It's easy to get started with Otterize OSS, 
whether you have 5 minutes to go through a quick pre-built tutorial, 
or 10 minutes to try it on your own services.

# Got 5 minutes?

All you need is a Kubernetes cluster where you have admin rights, along with the standard Kubernetes toolset:
* `kubectl`
* Helm

And with that -- <LinkButton href="/documentation/quick-tutorials">onwards to our quick tutorials</LinkButton>!

# Got 10 minutes?

Try it out with your own services, or use our larger reference "lab" example.
Again, you just need the standard tools:
* `kubectl`
* Helm

Then proceed to <LinkButton href="/documentation/guides">the usecase that's interesting to you</LinkButton>.

# Then what?

Once you've played around with Otterize, see how easy it is to 
[**bootstrap and gradually roll it out**](/documentation/3-guides/6-implementing-ibac) 
to your environments and your teams. We do **not** recommend turning intent-based access control into a big, time-consuming project!

