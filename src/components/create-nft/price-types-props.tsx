import { RadioGroup } from '@headlessui/react';
import { LoopIcon } from '@/components/icons/loop-icon';
import { SandClock } from '@/components/icons/sand-clock';
import { TagIcon } from '@/components/icons/tag-icon';

const PriceOptions = [
  {
    title: 'Create Project',
    description: 'NFT+Username+KYC',
    name: 'Fixed price',
    value: 'fixed',
    icon: <TagIcon className="h-5 w-5 sm:h-auto sm:w-auto" />,
  },
  {
    title: 'General F1.',
    description: 'Project, RFP, Escrow',
    name: 'Open for bids',
    value: 'bids',
    icon: <LoopIcon className="h-5 w-5 sm:h-auto sm:w-auto" />,
  },
  {
    title: 'General F1.+DAO',
    description: 'Project, RFP, Escrow, Utility, Voting',
    name: 'Timed auction',
    value: 'auction',
    icon: <SandClock className="h-5 w-5 sm:h-auto sm:w-auto" />,
  },
];

type PriceTypeProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function PriceType({ value, onChange }: PriceTypeProps) {
  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      className="grid grid-cols-3 gap-3"
    >
      {PriceOptions.map((item, index) => (
        <RadioGroup.Option value={item.value} key={index}>
          {({ checked }) => (
            <span
              className={`relative flex cursor-pointer items-center justify-center rounded-lg border-2 border-solid bg-white text-center text-sm font-medium tracking-wider shadow-card transition-all hover:shadow-large dark:bg-light-dark ${
                checked ? 'border-brand' : 'border-white dark:border-light-dark'
              }`}
            >
              <span className="relative flex h-28 flex-col items-center justify-center gap-3 px-2 text-center text-xs uppercase sm:h-36 sm:gap-4 sm:text-sm">
                <div style={{ fontSize: '20px' }}> {item.title} </div>
                {item.description}
              </span>
            </span>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}
