from playwright.sync_api import sync_playwright
import time

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('http://localhost:3000/about-us')
    page.wait_for_selector('text=Small Firm, Big Advantages', timeout=5000)
    
    # Get computed style of the first card
    js = """
    () => {
        const cards = document.querySelectorAll('.custom-auto-hover');
        if (cards.length === 0) return 'No cards found';
        const style = window.getComputedStyle(cards[0]);
        return {
            animationName: style.animationName,
            animationDuration: style.animationDuration,
            animationDelay: style.animationDelay,
            borderColor: style.borderColor,
            transform: style.transform
        };
    }
    """
    res = page.evaluate(js)
    print(res)
    browser.close()
