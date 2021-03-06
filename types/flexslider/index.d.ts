// Type definitions for FlexSlider 2.7
// Project: https://github.com/woothemes/FlexSlider
// Definitions by:  Diullei Gomes <https://github.com/diullei>
//                  Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace FlexSlider {
    interface SliderObject {
        [index: number]: JQuery;
        length: number;

        /**
         * The ul.slides within the slider
         */
        container: JQuery;
        /**
         * The slides of the slider
         */
        slides: JQuery;
        /**
         * The total number of slides in the slider
         */
        count: number;
        /**
         * The slide currently being shown
         */
        currentSlide: number;
        /**
         * Useful in .before(), the slide currently animating to
         */
        animatingTo: number;
        /**
         * is slider animating?
         */
        animating: boolean;
        /**
         * is the slider at either end?
         */
        atEnd: boolean;
        /**
         * force slider to stay paused during pauseOnHover event
         */
        manualPause: boolean;
        /**
         * The slider controlNav
         */
        controlNav: JQuery;
        /**
         * The slider directionNav
         */
        directionNav: JQuery;
        /**
         * The controlsContainer element of the slider
         */
        controlsContainer: JQuery;
        /**
         * The manualControls element of the slider
         */
        manualControls: JQuery;
        /**
         * Move slider
         */
        flexAnimate: (target: any, pause?: boolean, override?: boolean, withSync?: boolean, fromNav?: boolean) => any;
        /**
         * Pause slider slideshow interval
         */
        pause: () => any;
        /**
         * Play slider slideshow interval
         */
        play: () => void;
        /**
         * Resume slider slideshow interval
         */
        resume: () => any;
        /**
         * returns boolean if slider can advance
         */
        canAdvance: (target: any, fromNav?: boolean) => boolean;
        /**
         * get target given a direction
         */
        getTarget: (dir: 'next' | 'prev') => any;
    }

    interface Options {
        /**
         * Prefix string attached to the class of every element generated by the
         * plugin
         */
        namespace?: string;
        /**
         * Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at
         * your own peril
         */
        selector?: string;
        /**
         * Select your animation type, "fade" or "slide"
         * @default fade
         */
        animation?: 'fade' | 'slide';
        /**
         * Determines the easing method used in jQuery transitions. jQuery easing
         * plugin is supported!
         * @default swing
         */
        easing?: 'swing' | 'linear' | string;
        /**
         * Select the sliding direction, "horizontal" or "vertical"
         * @default horizontal
         * @since v1.9
         */
        direction?: 'horizontal' | 'vertical';
        /**
         * Reverse the animation direction
         * @default false
         */
        reverse?: boolean;
        /**
         * Should the animation loop? If false, directionNav will received "disable"
         * classes at either end
         * @default true
         */
        animationLoop?: boolean;
        /**
         * Allow height of the slider to animate smoothly in horizontal mode
         * @default false
         */
        smoothHeight?: boolean;
        /**
         * The slide that the slider should start on. Array notation (0 = first
         * slide)
         * @default 0
         * @since v1.9
         */
        startAt?: number;
        /**
         * Animate slider automatically
         * @default true
         */
        slideshow?: boolean;
        /**
         * Set the speed of the slideshow cycling, in milliseconds
         * @default 7000
         */
        slideshowSpeed?: number;
        /**
         * Set the speed of animations, in milliseconds
         * @default 600
         * @since v1.9
         */
        animationSpeed?: number;
        /**
         * Set an initialization delay, in milliseconds
         * @default 0
         */
        initDelay?: number;
        /**
         * Randomize slide order
         * @default false
         */
        randomize?: boolean;
        /**
         * Fade in the first slide when animation type is "fade"
         * @default true
         */
        fadeFirstSlide?: boolean;
        /**
         * Whether or not to put captions on thumbnails when using the "thumbnails"
         * controlNav.
         * @default false
         */
        thumbCaptions?: boolean;

        // Usability features
        /**
         * Pause the slideshow when interacting with control elements, highly
         * recommended.
         * @default true
         */
        pauseOnAction?: boolean;
        /**
         * Pause the slideshow when hovering over slider, then resume when no longer
         * hovering
         * @default false
         */
        pauseOnHover?: boolean;
        /**
         * Pause the slideshow when tab is invisible, resume when visible. Provides
         * better UX, lower CPU usage.
         * @default true
         */
        pauseInvisible?: boolean;
        /**
         * Slider will use CSS3 transitions if available
         * @default true
         */
        useCSS?: boolean;
        /**
         * Allow touch swipe navigation of the slider on touch-enabled devices
         * @default true
         */
        touch?: boolean;
        /**
         * If using video in the slider, will prevent CSS3 3D Transforms to avoid
         * graphical glitches
         * @default false
         */
        video?: boolean;

        // Primary Controls
        /**
         * Create navigation for paging control of each slide? Note: Leave true for
         * manualControls usage
         * @default true
         */
        controlNav?: 'thumbnails' | boolean;
        /**
         * Create navigation for previous/next navigation? (true/false)
         * @default true
         */
        directionNav?: boolean;
        /**
         * Set the text for the "previous" directionNav item
         * @default Previous
         */
        prevText?: string;
        /**
         * Set the text for the "next" directionNav item
         * @default Next
         */
        nextText?: string;

        // Secondary Navigation
        /**
         * Allow slider navigating via keyboard left/right keys
         * @default true
         * @since v1.9
         */
        keyboard?: boolean;
        /**
         * Allow keyboard navigation to affect multiple sliders. Default behavior
         * cuts out keyboard navigation with more than one slider present.
         * @default false
         */
        multipleKeyboard?: boolean;
        /**
         * Requires jquery.mousewheel.js
         * (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider
         * navigating via mousewheel
         * @default false
         */
        mousewheel?: boolean;
        /**
         * Create pause/play dynamic element
         * @default false
         */
        pausePlay?: boolean;
        /**
         * Set the text for the "pause" pausePlay item
         * @default Pause
         */
        pauseText?: string;
        /**
         * Set the text for the "play" pausePlay item
         * @default Play
         */
        playText?: string;

        // Special properties
        /**
         * Declare which container the navigation elements should be appended too.
         * Default container is the FlexSlider element. Example use would be
         * $(".flexslider-container"). Property is ignored if given element is not
         * found.
         */
        controlsContainer?: JQuery;
        /**
         * Declare custom control navigation. Examples would be $(".flex-control-nav
         * li") or "#tabs-nav li img", etc. The number of elements in your
         * controlNav should match the number of slides/tabs.
         */
        manualControls?: JQuery;
        /**
         * Custom prev / next button. Must be two jQuery elements. In order to make
         * the events work they have to have the classes "prev" and "next" (plus
         * namespace)
         */
        customDirectionNav?: JQuery;
        /**
         * Mirror the actions performed on this slider with another
         * slider. Use with care.
         */
        sync?: string;
        /**
         * Internal property exposed for turning the slider into a
         * thumbnail navigation for another slider
         */
        asNavFor?: string;

        // Carousel Options
        /**
         * Box-model width of individual carousel items, including
         * horizontal borders and padding.
         * @default 0
         */
        itemWidth?: number;
        /**
         * Margin between carousel items.
         * @default 0
         */
        itemMargin?: number;
        /**
         * Minimum number of carousel items that should be visible.
         * Items will resize fluidly when below this.
         * @default 1
         */
        minItems?: number;
        /**
         * Maxmimum number of carousel items that should be visible.
         * Items will resize fluidly when above this limit.
         * @default 0
         */
        maxItems?: number;
        /**
         * Number of carousel items that should move on animation. If
         * 0, slider will move all visible items.
         * @default 0
         */
        move?: number;
        /**
         * Whether or not to allow a slider comprised of a single slide
         * @default true
         */
        allowOneSlide?: boolean;

        // Browser Specific
        /**
         * Set to true when Firefox is the browser used.
         * @default false
         */
        isFirefox?: boolean;

        /**
         * Whether or not to enable RTL mode
         * @default false
         */
        rtl?: boolean;
    }

    interface Methods {
        /**
         * Fires when the slider loads the first slide
         */
        start?: (slider: SliderObject) => void;
        /**
         * Fires asynchronously with each slider animation
         */
        before?: (slider: SliderObject) => void;
        /**
         * Fires after each slider animation completes
         */
        after?: (slider: SliderObject) => void;
        /**
         * Fires when the slider reaches the last slide (asynchronous)
         */
        end?: (slider: SliderObject) => void;
        /**
         * Fires after a slide is added
         */
        added?: (slider: SliderObject) => void;
        /**
         * Fires after a slide is removed
         */
        removed?: (slider: SliderObject) => void;
        /**
         * Fires after the slider is initially setup
         */
        init?: (slider: SliderObject) => void;
    }

    type HelperActions = 'play' | 'pause' | 'stop' | 'next' | 'prev' | 'previous';
}

interface JQuery {
    flexslider(options?: FlexSlider.Options | FlexSlider.Methods | FlexSlider.HelperActions | number): any;
}
