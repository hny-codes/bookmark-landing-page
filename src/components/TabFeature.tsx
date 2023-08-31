import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import { Button } from './ui/button';

export default function TabFeature() {
  const [tabValue, setTabValue] = useState('simple');

  return (
    <Tabs.Root
      defaultValue={tabValue}
      className='p-8 sm:text-left'
      onValueChange={(value) => setTabValue(value)}
    >
      <Tabs.List className='flex flex-col sm:flex-row sm:justify-evenly sm:w-2/3 sm:mx-auto gap-6 sm:gap-0 mb-14 sm:mb-16 [&>*]:py-2'>
        <Tabs.Trigger
          value='simple'
          className='relative sm:w-full'
          data-test='tab-1'
        >
          Simple Bookmarking
          <span className='divider-top divider-bottom sm:before:w-0'></span>
          <span
            className={`${tabValue === 'simple' && 'tab-bar'}`}
            data-test='tab-active-1'
          ></span>
        </Tabs.Trigger>
        <Tabs.Trigger
          value='speedy'
          className='relative sm:w-full'
          data-test='tab-2'
        >
          Speedy Searching
          <span className='divider-bottom'></span>
          <span
            className={`${tabValue === 'speedy' && 'tab-bar'}`}
            data-test='tab-active-2'
          ></span>
        </Tabs.Trigger>
        <Tabs.Trigger
          value='easy'
          className='relative sm:w-full'
          data-test='tab-3'
        >
          Easy Sharing
          <span className='divider-bottom'></span>
          <span
            className={`${tabValue === 'easy' && 'tab-bar'}`}
            data-test='tab-active-3'
          ></span>
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        value='simple'
        data-test='tab-1-content'
        className='sm:grid sm:grid-cols-2  sm:content-wrapper'
      >
        <div className='relative'>
          <img
            src={'/images/illustration-features-tab-1.svg'}
            alt='bookmark browser illustration'
            className='sm:ml-auto sm:w-[70%]'
          />
          <span className='illus-bg sm:before:-left-28 sm:before:top-14'></span>
        </div>
        <div className='sm:w-3/5 sm:mx-auto'>
          <h1 className='text-2xl sm:text-4xl font-bold text-[--clr-very-dark-blue] mt-16 '>
            Bookmark in one click
          </h1>
          <p className='text-[--clr-grayish-blue] mt-4'>
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
          <Button
            variant={'btnPrimary'}
            size={'lg'}
            className='mt-8 sm:block hidden'
          >
            More Info
          </Button>
        </div>
      </Tabs.Content>
      <Tabs.Content
        value='speedy'
        data-test='tab-2-content'
        className='sm:grid sm:grid-cols-2 sm:content-wrapper'
      >
        <div className='relative'>
          <img
            src={'/images/illustration-features-tab-2.svg'}
            alt='Bookmark search illustration'
            className='sm:ml-auto sm:w-[70%]'
          />
          <span className='illus-bg sm:before:-left-28 sm:before:top-8'></span>
        </div>
        <div className='sm:w-3/5 sm:mx-auto'>
          <h1 className='text-2xl sm:text-4xl font-bold text-[--clr-very-dark-blue] mt-16'>
            Intelligent search
          </h1>
          <p className='text-[--clr-grayish-blue] mt-4'>
            Our powerful search feature will help you find saved sites in no
            time at all. No need to trawl through all your bookmarks.
          </p>
          <Button
            variant={'btnPrimary'}
            size={'lg'}
            className='mt-8 sm:block hidden'
          >
            More Info
          </Button>
        </div>
      </Tabs.Content>
      <Tabs.Content
        value='easy'
        data-test='tab-3-content'
        className='sm:grid sm:grid-cols-2 sm:content-wrapper'
      >
        <div className='relative'>
          <img
            src={'/images/illustration-features-tab-3.svg'}
            alt='Bookmark sharing illustration'
            className='sm:ml-auto sm:w-[70%]'
          />
          <span className='illus-bg sm:before:-left-28 sm:before:top-8'></span>
        </div>
        <div className='sm:w-3/5 sm:mx-auto'>
          <h1 className='text-2xl sm:text-4xl font-bold text-[--clr-very-dark-blue] mt-16'>
            Share your bookmarks
          </h1>
          <p className='text-[--clr-grayish-blue] mt-4'>
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </p>
          <Button
            variant={'btnPrimary'}
            size={'lg'}
            className='mt-8 sm:block hidden'
          >
            More Info
          </Button>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
}
