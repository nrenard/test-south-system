import amountHelper from './amount';

const noImage = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';

export default (item, listFavorites) => {
  const isSale = item.saleInfo.saleability !== 'NOT_FOR_SALE';
  const amount = item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : 0;

  const parserAmount = amountHelper(amount);

  return {
    id: item.id,
    amount: parserAmount,
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
