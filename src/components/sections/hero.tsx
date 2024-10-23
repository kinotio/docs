'use client'

import { ChevronRight, Github } from 'lucide-react'
// import Link from 'next/link'

import { Button } from '@/components/ui/button'

import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import BlurFade from '@/components/ui/blur-fade'

import { cn } from '@/lib/utils'

export const Hero = () => {
  return (
    <section className='w-full relative'>
      <div className='container relative z-10 grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-28'>
        <div className='space-y-8'>
          <BlurFade delay={0.1}>
            <div className='mx-auto text-center text-7xl md:text-9xl font-bold'>
              <h1>Explore our documentations</h1>
            </div>
          </BlurFade>

          <div className='space-y-4 md:space-y-0 md:space-x-4'>
            <BlurFade delay={0.3}>
              <div className='mt-6 gap-2 flex justify-center'>
                <Button
                  className='w-5/6 md:w-1/4 font-bold group/arrow'
                  onClick={() => window.open('/docs', '_blank')}
                >
                  Documentation
                  <ChevronRight className='size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform' />
                </Button>
                <Button
                  className='w-5/6 md:w-1/4 font-bold group/arrow'
                  variant='outline'
                  onClick={() => {
                    window.open('https://github.com/kinotio/drowser', '_blank')
                  }}
                >
                  <Github className='size-5 mr-2' />
                  Github
                  <ChevronRight className='size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform' />
                </Button>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>

      <AnimatedGridPattern
        numSquares={30}
        className={cn(
          '[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%]'
        )}
      />
    </section>
  )
}