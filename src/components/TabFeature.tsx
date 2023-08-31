import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';

export default function TabFeature() {
  const [tabValue, setTabValue] = useState('simple');

  return (
    <Tabs.Root
      defaultValue={tabValue}
      className='p-8'
      onValueChange={(value) => setTabValue(value)}
    >
      <Tabs.List className='flex flex-col gap-6 mb-14 [&>*]:py-2'>
        <Tabs.Trigger value='simple' className='relative' data-test='tab-1'>
          Simple Bookmarking
          <span className='divider-top divider-bottom'></span>
          <span
            className={`${tabValue === 'simple' && 'tab-bar'}`}
            data-test='tab-active-1'
          ></span>
        </Tabs.Trigger>
        <Tabs.Trigger value='speedy' className='relative' data-test='tab-2'>
          Speedy Searching
          <span className='divider-bottom'></span>
          <span
            className={`${tabValue === 'speedy' && 'tab-bar'}`}
            data-test='tab-active-2'
          ></span>
        </Tabs.Trigger>
        <Tabs.Trigger value='easy' className='relative' data-test='tab-3'>
          Easy Sharing
          <span className='divider-bottom'></span>
          <span
            className={`${tabValue === 'easy' && 'tab-bar'}`}
            data-test='tab-active-3'
          ></span>
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value='simple' data-test='tab-1-content'>
        <div className='relative'>
          <img
            src={'/images/illustration-features-tab-1.svg'}
            alt='bookmark browser illustration'
          />
          <span className='illus-bg'></span>
        </div>
        <h1 className='text-2xl font-bold text-[--clr-very-dark-blue] mt-16'>
          Bookmark in one click
        </h1>
        <p className='text-[--clr-grayish-blue] mt-4'>
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
      </Tabs.Content>
      <Tabs.Content value='speedy' data-test='tab-2-content'>
        <div className='relative'>
          <img
            src={'/images/illustration-features-tab-2.svg'}
            alt='Bookmark search illustration'
          />
          <span className='illus-bg'></span>
        </div>
        <h1 className='text-2xl font-bold text-[--clr-very-dark-blue] mt-16'>
          Intelligent search
        </h1>
        <p className='text-[--clr-grayish-blue] mt-4'>
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all your bookmarks.
        </p>
      </Tabs.Content>
      <Tabs.Content value='easy' data-test='tab-3-content'>
        <div className='relative'>
          <img
            src={'/images/illustration-features-tab-3.svg'}
            alt='Bookmark sharing illustration'
          />
          <span className='illus-bg'></span>
        </div>
        <h1 className='text-2xl font-bold text-[--clr-very-dark-blue] mt-16'>
          Share your bookmarks
        </h1>
        <p className='text-[--clr-grayish-blue] mt-4'>
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of a button.
        </p>
      </Tabs.Content>
    </Tabs.Root>
  );
}
