import { renderHook, cleanup } from '@testing-library/react-hooks';
import usePdpGtm from './usePdpGtm';
import { trackPdpGtm } from './pdpGtmUtils';

jest.mock('./pdpGtmUtils');

describe('analytics helper', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('should fire usePdpGtm Hook', () => {
    const pdpData = {
      relatedProducts: {
        collectionProducts: [],
        relatedProductsLoaded: true,
      },
      productInfo: {
        variants: [{}],
        breadcrumbs: [{}],
        serviceWarrantyDetails: {
          services: [],
          warranties: [{}],
        },
      },
      priceInfo: [{}],
      breadcrumbs: [{}],
    };
    const { result } = renderHook(() => usePdpGtm(pdpData));
    expect(trackPdpGtm).toHaveBeenCalledTimes(1);
    expect(result.current).toBeUndefined();
  });

  it('should fire usePdpGtm Hook without data', () => {
    const { result } = renderHook(() => usePdpGtm(undefined));
    expect(trackPdpGtm).not.toBeCalled();
    expect(result.current).toBeUndefined();
  });
});
