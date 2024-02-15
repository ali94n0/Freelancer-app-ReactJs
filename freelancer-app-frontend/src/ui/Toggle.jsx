import { Switch } from "@headlessui/react";


function Toggle({checked,onChange,label,enabled}) {
    return (
        <Switch.Group>
        <div className="flex items-center gap-x-2 w-[8rem]">
          <Switch.Label className="mr-4">{label}</Switch.Label>
          <Switch
            checked={checked}
            onChange={onChange}
            className={`${
                enabled === "OPEN" ? 'bg-primary-800' : 'bg-secondary-200'
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors `}
          >
            <span
              className={`${
                enabled === "OPEN" ? '-translate-x-6' : '-translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>
      </Switch.Group>
    );
}

export default Toggle;