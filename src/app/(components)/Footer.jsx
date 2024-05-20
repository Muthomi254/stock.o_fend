'use client';

import { Footer } from 'flowbite-react';

export default function Footer() {
  return (
    <Footer container>
      <Footer.Copyright href="#" by="Stocko™" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">Back To Top</Footer.Link>

        <Footer.Link href="/About">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="/Contact">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
