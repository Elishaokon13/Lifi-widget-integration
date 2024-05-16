import { LiFiWidget, WidgetConfig } from '@lifi/widget';
import { useMemo } from 'react';

export const WidgetPage = () => {
  const widgetConfig: WidgetConfig = useMemo(() => ({
      containerStyle: {
        boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
        borderRadius: '16px',
      },
    }), []);

  return (
    <LiFiWidget integrator="defidevrel" config={widgetConfig} />
  );
};