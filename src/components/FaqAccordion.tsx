import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FaqAccordion() {
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1'>
        <AccordionTrigger className='font-normal text-left'>What is Bookmark?</AccordionTrigger>
        <AccordionContent className='text-[--clr-grayish-blue] text-lg leading-loose pb-8 w-[90%]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis
          quam ornare mattis.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger className='font-normal text-left'>How can I request a new browser?</AccordionTrigger>
        <AccordionContent className='text-[--clr-grayish-blue] text-lg leading-loose pb-8 w-[90%]'>
          Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
          ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
          aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
          Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
          Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger className='font-normal text-left'> Is there a mobile app?</AccordionTrigger>
        <AccordionContent className='text-[--clr-grayish-blue] text-lg leading-loose pb-8 w-[90%]'>
          Sed consectetur quam id neque fermentum accumsan. Praesent luctus
          vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
          quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex
          et ultricies bibendum.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-4'>
        <AccordionTrigger className='font-normal text-left'>What about other Chromium browsers?</AccordionTrigger>
        <AccordionContent className='text-[--clr-grayish-blue] text-lg leading-loose pb-8 w-[90%]'>
          Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
          mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque
          non ut velit.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
