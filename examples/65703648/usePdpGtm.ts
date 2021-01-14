// @ts-nocheck
import { useEffect } from 'react';
import { trackPdpGtm } from './pdpGtmUtils';
import _ from 'lodash';

export default function useGtmPdp(data = {}) {
  console.log('are you getting called?');
  const { relatedProducts, results, priceInfo, breadcrumbs } = data;
  const relatedProductsLoaded = _.get(relatedProducts, 'relatedProductsLoaded');
  useEffect(() => {
    if (relatedProductsLoaded) {
      trackPdpGtm(data);
    }
  }, [relatedProductsLoaded, results, priceInfo, breadcrumbs]);
}
