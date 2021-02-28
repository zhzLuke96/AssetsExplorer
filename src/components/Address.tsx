import React, { useState, useCallback } from 'react';

export const Address = () => {
  const [address, setAddress] = useState('');
  const onKeyPress = useCallback((ev: React.KeyboardEvent) => {
    switch (ev.key) {
      case 'Enter':
        setAddress('');
        break;
      default:
        return;
    }
  }, []);
  return (
    <div>
      <style jsx />
      <span>👈</span>
      <span>👉</span>
      <span>👆</span>
      <input
        type="text"
        value={address}
        onChange={(ev) => setAddress(ev.target.value)}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default Address;
