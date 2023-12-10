import { atom, useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import '../../../../../css/choice.css';
import { useGameStore } from '../../../../../store/game';
import { scenes } from './ChooseObjects';

export const slideAtom = atom(0);

export const Overlay = () => {
  const { addToBacklog, removeFromBacklog, setPlace, setActionsGame } =
    useGameStore.getState();
  const [backlog] = useGameStore((state) => [state.backlog]);
  const [slide, setSlide] = useAtom(slideAtom);
  const [displaySlide, setDisplaySlide] = useState(slide);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => {
      setDisplaySlide(slide);
      setVisible(true);
    }, 2600);
  }, [slide]);

  const handleClick = () => {
    if (slide === 0) {
      addToBacklog('medical');
    } else if (slide === 1) {
      addToBacklog('food');
    } else if (slide === 2) {
      addToBacklog('tools');
    } else if (slide === 3) {
      addToBacklog('devicePower');
    } else if (slide === 4) {
      addToBacklog('wokiToki');
    }
  };

  const handleClick2 = () => {
    if (slide === 0) {
      removeFromBacklog('medical');
    } else if (slide === 1) {
      removeFromBacklog('food');
    } else if (slide === 2) {
      removeFromBacklog('tools');
    } else if (slide === 3) {
      removeFromBacklog('devicePower');
    } else if (slide === 4) {
      removeFromBacklog('wokiToki');
    }
  };

  const changeToPlace = () => {
    setActionsGame('showOverlay', false);
    setPlace('bunker');
  };

  return (
    <>
      <div
        className={`fixed z-10 top-0 left-0 bottom-0 right-0 flex flex-col justify-between pointer-events-none text-black ${
          visible ? '' : 'opacity-0'
        } transition-opacity duration-1000`}
      >
        <svg
          className="w-40 mx-auto mt-8"
          viewBox="0 0 342 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* TITULO */}
        </svg>
        <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 right-0 flex-1 flex items-center justify-between p-4">
          <svg
            onClick={() =>
              setSlide((prev) => (prev > 0 ? prev - 1 : scenes.length - 1))
            }
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 pointer-events-auto hover:opacity-60 transition-opacity cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 pointer-events-auto hover:opacity-60 transition-opacity cursor-pointer"
            onClick={() =>
              setSlide((prev) => (prev < scenes.length - 1 ? prev + 1 : 0))
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
        <div className="absolute top-30 bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 pt-20 pb-10 p-4 flex items-center flex-col text-center gap-2">
          <h1 className="text-5xl font-extrabold">
            {scenes[displaySlide].name}
          </h1>
          <p className="text-opacity-60 italic">
            {scenes[displaySlide].description}
          </p>
          <div className="flex gap-7">
            <button
              className={` pointer-events-auto  cursor-pointer font-pixelcraft button ${'selected'}`}
              type="button"
              onTouchStart
              style={{ outline: 'none' }}
              onClick={handleClick}
            >
              <div className={`button-top ${'selected'}`}>Seleccionar</div>
              <div className={`button-bottom ${'selected'}`}></div>
              <div className="button-base"></div>
            </button>
            <button
              className={` pointer-events-auto  cursor-pointer font-pixelcraft button ${'not-selected'}`}
              type="button"
              onTouchStart
              style={{ outline: 'none' }}
              onClick={handleClick2}
            >
              <div className={`button-top ${'not-selected'}`}>Quitar</div>
              <div className={`button-bottom ${'not-selected'}`}></div>
              <div className="button-base"></div>
            </button>
            {backlog.length >= 2 && (
              <button
                className={` pointer-events-auto  cursor-pointer font-pixelcraft button ${'not-selected'}`}
                type="button"
                onTouchStart
                style={{ outline: 'none' }}
                onClick={changeToPlace}
              >
                <div className={`button-top ${'not-selected'}`}>Terminar</div>
                <div className={`button-bottom ${'not-selected'}`}></div>
                <div className="button-base"></div>
              </button>
            )}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};
