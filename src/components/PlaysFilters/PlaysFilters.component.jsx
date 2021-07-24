import { Disclosure } from '@headlessui/react'
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
const PlaysFilter = () => {
  return (
    <Disclosure>
        {
            ({open}) => (
                <>
                    <Disclosure.Button className="py-2">
                        { open ?  <BiChevronDown /> : <BiChevronUp /> }
                        Is team pricing available?
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                        Yes! You can purchase a license that you can share with your entire
                        team.
                    </Disclosure.Panel>
                </>
            )
        }
    </Disclosure>
  );
};

export default PlaysFilter;