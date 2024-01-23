# House Hunter Pro

## Features:
- User Authentication (Not firebase)
- Protected Routes
- CRUD
- JWT
- SPA

## Skills:
- Javascript
- React
- MongoDB
- Manual Auth
- CSS
- Tailwind CSS
- HTML

## Live Url: https://mushy-hen.surge.sh/

## Palindrom problem solve:

<code>
  const isPalindrome = (string) => {
    // Removing non-alphanumeric characters and convert to lowercase
    const cleanString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Comparing the stringing with the original cleaned stringing
    return cleanString === cleanString.split('').reverse().join('');
}
</code>
