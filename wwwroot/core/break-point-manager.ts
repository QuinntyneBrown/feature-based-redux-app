﻿export class BreakPointManager {

    constructor(private $window: angular.IWindowService) {
        $window.document.addEventListener("DOMContentLoaded", event => this.onChange(event));
        $window.addEventListener("resize", event => this.onChange(event));
        $window.addEventListener("orientationchange", event => this.onChange(event));
    }

    timeoutId = 0;

    breakPoints = { "small": 480, "midSmall": 752, "medium": 960, "large": 1280, "extraLarge": 9999 };

    removeResponsiveClasses = () => {
        for (var prop in this.breakPoints) {
            this.$window.document.body.classList.remove(prop);
        }
    }

    updateResponsiveClass = className => {
        this.removeResponsiveClasses();
        this.$window.document.body.classList.add(className);
    }

    onChange = event => {
        if (this.timeoutId) this.$window.clearTimeout(this.timeoutId);
        this.timeoutId = this.$window.setTimeout(() => {
            var screenWidth = this.$window.innerWidth;
            for (var propertyName in this.breakPoints) {
                if (screenWidth < this.breakPoints[propertyName]) {
                    this.updateResponsiveClass(propertyName);
                    break;
                }
            }
        }, 100);
    }
}


