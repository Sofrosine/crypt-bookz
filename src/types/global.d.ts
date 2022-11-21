type FontFamily =
  | 'Inter-Black'
  | 'Inter-Bold'
  | 'Inter-ExtraBold'
  | 'Inter-ExtraLight'
  | 'Inter-Light'
  | 'Inter-Medium'
  | 'Inter-Regular'
  | 'Inter-SemiBold'
  | 'Inter-Thin';

type PriceItemProps = {
  value: number;
  label: string;
};

type ModalDetailProps = {
  data: PriceItemProps[];
  label: string;
  image?: {
    color?: string;
    uri?: string;
  };
};
