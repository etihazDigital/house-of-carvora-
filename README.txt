============================================================
 HOUSE OF CRAVORA — WEBSITE README
============================================================

WHAT'S IN THIS FOLDER
------------------------------------------------------------
index.html      Home page
about.html      About / our story page
menu.html       Bomboloni & Cookies menu
gallery.html    Photo gallery
contact.html    Location, hours, WhatsApp, map
style.css       All the site's design (colors, fonts, layout)
script.js       Menu tabs, mobile menu, gallery filter, animations
assets/         The ONLY folder in this project — put every
                image here. See assets/image-list.txt for the
                exact file names to use.

There are no other folders. Everything else stays exactly
where it is.

HOW TO PREVIEW THE SITE
------------------------------------------------------------
Just double-click index.html and it opens in your browser.
Click through Home / About / Menu / Gallery / Contact using
the top menu to check everything.

HOW TO ADD YOUR IMAGES
------------------------------------------------------------
1. Open assets/image-list.txt
2. Save each photo into the "assets" folder using the exact
   file name listed (e.g. hero-product.jpg)
3. Refresh the page in your browser — the photo appears
   automatically. No code editing needed for images.

Until an image is added, that spot shows a soft pastel color
block instead of a broken picture icon, so the site still
looks intentional while you're gathering photos.

HOW TO EDIT TEXT (menu items, prices, story, etc.)
------------------------------------------------------------
Open any .html file in a text editor (Notepad, TextEdit, VS
Code, or even Word's "plain text" mode) and edit the words
directly — everything is plain readable text inside the page.

I've marked everything that still needs YOUR real details in
square brackets, for example:
    [Add price]
    [EDIT: Share how House of Cravora started...]
    [Customer name]

Search each file for the word "EDIT" or "Add" to find every
spot that still needs your input. Once you've filled these in,
delete the square brackets and just leave your text.

Things you'll likely want to personalize:
  - menu.html      -> real prices, and swap sample flavour
                      names if yours are different
  - about.html      -> your actual founding story
  - index.html      -> the 3 testimonial quotes (currently
                      blank placeholders — do not publish
                      fake reviews, only add real ones)
  - contact.html     -> the map embed (see below) and any
                      preorder/delivery info

CONTACT DETAILS ALREADY BUILT IN
------------------------------------------------------------
WhatsApp:    +91 99518 24427  (every "Order/Chat" button opens
             a pre-filled WhatsApp message to this number)
Instagram:   @houseofcravora (linked throughout the site)
Address:     Opposite Secretariat, NE Gate, Street No. 25,
             Hyderabad, Telangana
Hours:       Thursday-Sunday, 8:30 PM - 1:00 AM
Email:       Not included anywhere on the site, as requested.

To change the WhatsApp number, address or hours, search for
the number/address text inside the .html files (it repeats in
each page's header, footer and contact.html) and replace it.
If you'd rather I make the change, just tell me the new
details.

THE MAP ON THE CONTACT PAGE
------------------------------------------------------------
Right now the map searches Google Maps for your address text,
which works but isn't pixel-perfect. For an exact pin:
  1. Open Google Maps, find your exact stall location
  2. Share -> Embed a map -> copy the <iframe> code
  3. Send it to me, or paste it into contact.html in place of
     the existing map iframe

MOBILE VIEW
------------------------------------------------------------
The whole site is built mobile-first and tested down to small
phone widths — menu collapses into a full-screen tap menu,
grids stack into single/double columns, buttons stay large and
tappable. Resize your browser window (or open on your phone)
to check it.

PUTTING THIS LIVE ON THE INTERNET
------------------------------------------------------------
This is a plain HTML/CSS/JS site, so it can be hosted almost
anywhere for free or very cheap, for example:
  - Netlify (drag-and-drop this whole folder at netlify.com)
  - GitHub Pages
  - Vercel
  - Any regular web hosting + a domain name (e.g. GoDaddy,
    Hostinger) if you want houseofcravora.com

Happy to walk you through whichever option you pick, or set
it up for you directly.

QUESTIONS / CHANGES?
------------------------------------------------------------
Just come back to this conversation and tell me what to
change — colors, wording, new sections, a real menu, a
booking form, anything.
