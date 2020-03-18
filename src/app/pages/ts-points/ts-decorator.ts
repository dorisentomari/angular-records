export const EmojiDecorator = () => {
  return (target: object, key: string) => {
    let val = target[key];

    const getter = () => {
      return val;
    };

    const setter = value => {
      val = `😁${value}😁`;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  };
};

export const ConfirmDecorator = (message: string) => {
  return (target: object, key: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;
    descriptor.value = (...args: Array<any>) => {
      const allow = window.confirm(message);
      if (allow) {
        return original.apply(...args);
      }
      return null;
    };
  };
};
