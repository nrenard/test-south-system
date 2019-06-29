import amountHelper from './amount';

export const parseBooks = (item, list) => {
  const isSale = item.saleInfo.saleability !== 'NOT_FOR_SALE';

  return {
    id: item.id,
    amount: isSale ? amountHelper(`${item.saleInfo.listPrice.amount}00`) : 0,
    title: item.volumeInfo.title,
    thumbnail: item.volumeInfo.imageLinks.thumbnail,
    smallThumbnail: item.volumeInfo.imageLinks.smallThumbnail,
    buyLink: isSale ? item.saleInfo.buyLink : null,
    description: item.volumeInfo.description,
    publisher: item.volumeInfo.publisher,
    isSale,
    isFavorite: !!(list && list.find(book => book.id === item.id)),
  };
};
