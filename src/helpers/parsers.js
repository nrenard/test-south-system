import amountHelper from './amount';

const noImage = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';

export const parseBooks = (item, listFavorites) => {
  const isSale = item.saleInfo.saleability !== 'NOT_FOR_SALE';

  return {
    id: item.id,
    amount: isSale ? amountHelper(`${item.saleInfo.listPrice.amount}00`) : 0,
    title: item.volumeInfo.title,
    smallThumbnail: item.volumeInfo.imageLinks
      ? item.volumeInfo.imageLinks.smallThumbnail
      : noImage,
    buyLink: isSale ? item.saleInfo.buyLink : null,
    description: item.volumeInfo.description,
    publisher: item.volumeInfo.publisher,
    isSale,
    isFavorite: !!(listFavorites && listFavorites.find(book => book.id === item.id)),
  };
};
