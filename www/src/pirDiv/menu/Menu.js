export class Menu {
  constructor(par) {
    this.par = par;
    this.menuPreloader = new MenuPreloader(this);
    this.menuDebager = new MenuDebager(this);
    this.menuDebager.element.hidden = true;
    this.menuLogo = new MenuLogo(this);
    this.menuFPV = new MenuFPV(this);
    this.menuBlock = new MenuBlock(this);
    this.createDebugPhysicsButton();
    this.createAddCookiesButton();
  }

  createAddCookiesButton() {
    const param = window.param;
    this.addCookiesElement = document.createElement('div');
    document.body.append(this.addCookiesElement);
    this.addCookiesRoot = createRoot(this.addCookiesElement);
    this.addCookiesRoot.render(createElement('button', {
      type: 'button',
      title: 'Добавить 5 печенек',
      'aria-label': 'Добавить 5 печенек',
      onClick: () => this.par.piramidka.addCookies(),
      style: {
        position: 'fixed', top: param.otstup, left: param.otstup, zIndex: 10,
        height: 40, display: 'flex', alignItems: 'center', gap: 8,
        padding: '0 12px', cursor: 'pointer', color: param.color,
        border: '1px solid #c9d3df', borderRadius: 8,
        background: 'rgba(255, 255, 255, 0.92)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', font: '14px sans-serif'
      }
    }, createElement('span', { 'aria-hidden': true, style: { fontSize: 24 } }, '🍪'), 'Add'));
  }

  createDebugPhysicsButton() {
    const param = window.param;
    this.debugPhysicsElement = document.createElement('div');
    document.body.append(this.debugPhysicsElement);
    this.debugPhysicsRoot = createRoot(this.debugPhysicsElement);
    this.debugPhysicsRoot.render(createElement('button', {
      type: 'button',
      title: 'Показать/скрыть физическую 3D-геометрию',
      'aria-label': 'Показать/скрыть физическую 3D-геометрию',
      ref: (element) => {
        this.debugPhysicsButton = element;
        this.updateDebugPhysicsButton(this.par.piramidka.debugPhysics);
      },
      onClick: () => {
        this.par.piramidka.debugPhysics = !this.par.piramidka.debugPhysics;
      },
      style: {
        position: 'fixed', top: param.otstup, right: param.otstup, zIndex: 10,
        width: 40, height: 40, display: 'flex', alignItems: 'center',
        justifyContent: 'center', padding: param.otstup, cursor: 'pointer',
        border: '1px solid #c9d3df', borderRadius: 8,
        background: 'rgba(255, 255, 255, 0.92)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
      }
    }, createElement('svg', {
      viewBox: '0 0 24 24', width: 24, height: 24, fill: 'none',
      stroke: 'currentColor', strokeWidth: 1.5, strokeLinejoin: 'round',
      'aria-hidden': true
    }, createElement('path', {
      d: 'M12 2 22 7v10l-10 5-10-5V7Z M2 7l10 5 10-5 M12 12v10 M12 2v10 M2 17l10-5 10 5'
    }))));
  }

  updateDebugPhysicsButton(active) {
    if (!this.debugPhysicsButton) return;
    this.debugPhysicsButton.style.color = active ? window.param.colorActive : window.param.color;
    this.debugPhysicsButton.setAttribute('aria-pressed', String(active));
  }

  setBlockEvent(blockEvent) {
    this.blockEvent = blockEvent;
    this.menuBlock.setBlock(blockEvent?.block ?? null);
  }
}
import { MenuDebager } from './MenuDebager.js';
import { MenuLogo } from './MenuLogo.js';
import { MenuFPV } from './MenuFPV.js';
import { MenuPreloader } from './MenuPreloader.js';
import { MenuBlock } from './MenuBlock.js';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

