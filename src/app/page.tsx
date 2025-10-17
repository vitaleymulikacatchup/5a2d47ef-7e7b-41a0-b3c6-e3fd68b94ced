"use client";

import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id='nav' data-section='nav' className='scroll-mt-24'>
        <NavbarLayoutFloatingInline
          navItems={[
            { name: 'Home', id: 'home' },
            { name: 'About', id: 'about' },
            { name: 'Contact', id: 'contact' }
          ]}
          brandName='Hotel Haven'
        />
      </div>

      <div id='hero' data-section='hero' className='scroll-mt-24'>
        <div className='mx-auto px-4 md:px-6'>
          <HeroSplit
            title="Welcome to Hotel Haven"
            description="Experience luxury and comfort in the heart of the city."
            imageSrc="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[{ text: 'Discover More', href: 'about' }]}
          />
        </div>
      </div>

      <div id='about' data-section='about' className='scroll-mt-24'>
        <div className='mx-auto px-4 md:px-6'>
          <TextSplitAbout
            title='About Hotel Haven'
            description={[
              "Located in the heart of the city, our hotel offers an exclusive retreat.",
              "We pride ourselves on exceptional service and amenities tailored to your needs."
            ]}
            buttons={[{ text: 'Learn More', href: 'about' }]}
          />
        </div>
      </div>

      <div id='testimonial' data-section='testimonial' className='scroll-mt-24'>
        <div className='mx-auto px-4 md:px-6'>
          <TestimonialCardOne
            title="What Our Guests Say"
            testimonials={[{
              id: '1',
              name: 'Jessica Brown',
              role: 'Regular Guest',
              company: 'Corporate',
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }]}
          />
        </div>
      </div>

      <div id='contact' data-section='contact' className='scroll-mt-24'>
        <div className='mx-auto px-4 md:px-6'>
          <ContactSplit
            tag='Contact Us'
            title='Stay Connected'
            description='For any inquiries, feel free to reach out to our dedicated support team.'
            imageSrc="https://images.pexels.com/photos/28999982/pexels-photo-28999982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>

      <div id='footer' data-section='footer' className='scroll-mt-24'>
        <div className='mx-auto px-4 md:px-6'>
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: 'Features', href: 'features' }, { label: 'Pricing', href: 'pricing' }] },
              { items: [{ label: 'About Us', href: 'about' }, { label: 'Contact', href: 'contact' }] }
            ]}
            logoText='Hotel Haven'
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
