# Restaurant Listing App

## Informasi Teknis

- **React Version**: 19.1.0
- **Node Version**: 20.14.0
- **Package Manager**: npm

## Cara Menjalankan Proyek

### Menggunakan npm:
```bash
npm install
npm start
```

Aplikasi akan berjalan di `http://localhost:3000`

## Struktur Proyek

```
src/
├── components/
│   ├── FilterNavigation.js
│   ├── RestaurantCard.js
│   └── RestaurantDetail.js
├── pages/
│   ├── MainPage.js
│   └── DetailPage.js
├── data/
│   └── mockData.js
└── App.css
└── App.js
└── index.js
└── index.css

```

## Fitur

- Filter restoran berdasarkan status buka/tutup
- Filter berdasarkan rentang harga
- Filter berdasarkan kategori makanan
- Detail view untuk setiap restoran
- Review pelanggan
- Rating restoran
- Responsive design

## API

Menggunakan mock data untuk simulasi data restoran dengan struktur yang sesuai dengan API restoran pada umumnya.