// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="SUMMARY.html"><strong aria-hidden="true">1.</strong> Differentialrechnung</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="SUMMARY.html"><strong aria-hidden="true">1.1.</strong> Ableitung</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Differentialrechnung/Ableitung/Ableitungsregeln.html"><strong aria-hidden="true">1.1.1.</strong> Ableitungsregeln</a></li><li class="chapter-item expanded "><a href="Differentialrechnung/Ableitung/Besondere_Ableitungen.html"><strong aria-hidden="true">1.1.2.</strong> Besondere Ableitungen</a></li></ol></li><li class="chapter-item expanded "><a href="Differentialrechnung/Funktionen-Eigenschaften.html"><strong aria-hidden="true">1.2.</strong> Eigenschaften von Funktionen</a></li><li class="chapter-item expanded "><a href="Differentialrechnung/Steigungswinkel.html"><strong aria-hidden="true">1.3.</strong> Steigungswinkel</a></li><li class="chapter-item expanded "><a href="Differentialrechnung/Tangente_Normale.html"><strong aria-hidden="true">1.4.</strong> Tangente und Normale</a></li></ol></li><li class="chapter-item expanded "><a href="SUMMARY.html"><strong aria-hidden="true">2.</strong> Analytische Geometrie</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="SUMMARY.html"><strong aria-hidden="true">2.1.</strong> Abstände</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Analytische_Geometrie/Abstände/Abstand_Punkt-Ebene.html"><strong aria-hidden="true">2.1.1.</strong> Punkt-Ebene</a></li><li class="chapter-item expanded "><a href="Analytische_Geometrie/Abstände/Abstand_Punkt-Gerade.html"><strong aria-hidden="true">2.1.2.</strong> Punkt-Gerade</a></li></ol></li><li class="chapter-item expanded "><a href="SUMMARY.html"><strong aria-hidden="true">2.2.</strong> Spiegelungen</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Analytische_Geometrie/Spiegelung/Spiegelung_Punkt-Ebene.html"><strong aria-hidden="true">2.2.1.</strong> Punkt-Ebene</a></li><li class="chapter-item expanded "><a href="Analytische_Geometrie/Spiegelung/Spiegelung_Gerade-Ebene.html"><strong aria-hidden="true">2.2.2.</strong> Gerade-Ebene</a></li><li class="chapter-item expanded "><a href="Analytische_Geometrie/Spiegelung/Spiegelung_Punkt-Gerade.html"><strong aria-hidden="true">2.2.3.</strong> Punkt-Gerade</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="Extremwertprobleme.html"><strong aria-hidden="true">3.</strong> Extremwertprobleme</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
