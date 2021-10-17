function htmlspecialchars(formData) {
    // Insert your code here
    let result = "";
    for (let i = 0; i < formData.length; i++) {

        if (formData[i] === '<') {
            result = result + '&lt;'
        }else
        if (formData[i] === '>') {
            result = result + '&gt;'
        }else
        if (formData[i] === '"') {
            result = result + '&quot;'
        }else
        if (formData[i] === '&') {
            result = result + '&amp;'
        } else {
            result = result + formData[i]
        }
    }
    return result;
}

test('Simple tests', () => {
    expect(htmlspecialchars("<h2>Hello World</h2>")).toBe("&lt;h2&gt;Hello World&lt;/h2&gt;");
});

test('Simple tests', () => {
    expect(htmlspecialchars("Hello, how would you & I fare?")).toBe("Hello, how would you &amp; I fare?");
});

test('Simple tests', () => {
    expect(htmlspecialchars('How was "The Matrix"?  Did you like it?')).toBe('How was &quot;The Matrix&quot;?  Did you like it?');
});

test('Simple tests', () => {
    expect(htmlspecialchars("<script>alert('Website Hacked!');</script>")).toBe("&lt;script&gt;alert('Website Hacked!');&lt;/script&gt;");
});