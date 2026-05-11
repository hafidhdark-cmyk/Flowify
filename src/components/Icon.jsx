const paths = {
  home: 'M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5H15v-6H9v6H4.5A1.5 1.5 0 0 1 3 19.5v-9Z',
  box: 'M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Zm8 4.5 8-4.5M12 12 4 7.5M12 12v9',
  grid: 'M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z',
  store: 'M4 10h16l-1-5H5l-1 5Zm2 0v10h12V10M8 20v-6h8v6',
  wallet: 'M4 7h16v13H4V7Zm0 0V5h13v2m1 6h5v4h-5v-4Z',
  settings: 'M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0-5 1.2 2.6 2.8.3-2.1 1.9.6 2.7L12 9.6 9.5 11l.6-2.7L8 6.4l2.8-.3L12 3.5Z',
  plus: 'M12 5v14M5 12h14',
  logout: 'M14 8V5H5v14h9v-3m-1-4h8m0 0-3-3m3 3-3 3',
  bell: 'M6 17h12l-1.4-2V10a4.6 4.6 0 0 0-9.2 0v4.9L6 17Zm4 2h4',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0',
  search: 'm21 21-4.5-4.5M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z',
  shirt: 'M8 4 5 6l-2 5 4 1v8h10v-8l4-1-2-5-3-2-2.5 2h-3L8 4Z',
  hat: 'M5 15c3 2 11 2 14 0M8 14l2-6 4 4 3-3 1 5',
  bag: 'M7 8h10l1 12H6L7 8Zm3 0a2 2 0 0 1 4 0',
  cart: 'M5 5h2l2 10h8l2-7H8m2 11h.1m7.9 0h.1',
  calendar: 'M5 5h14v15H5V5Zm3-2v4m8-4v4M5 10h14',
  glasses: 'M4 14a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm10 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm-4 0h4',
  chevron: 'm9 6 6 6-6 6',
  boot: 'M5 12h14v2a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-2Z',
}

export default function Icon({ name, size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path d={paths[name]} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  )
}