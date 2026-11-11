
export class PCreate {
  constructor(par, addBlock) {
    this.par = par;
    this.addBlock = addBlock;
    this.dropTimeout = null;
  }

  clear() {
    clearTimeout(this.dropTimeout);
    this.dropTimeout = null;
  }

  initialize() {
    this.par.clear();
    this.par.beginLoading();
    // Ground supports the scene objects.
    this.addBlock({
      color: 0x241e19,
      array: [
        { type: 'box', size: [200, 2, 200] }
      ],
      pos: [0, -1.66, 0],
      move: false, friction: 0.6, restitution: 0.05
    });
    this.addBlock({
      color: 0x625446,
      array: [
        { type: 'cylinder', size: [7.875, 0.6, 7.875], segments: 128, bevel: 0.08 }
      ],
      pos: [0, -0.3, 0],
      move: false, friction: 0.5, restitution: 0.05
    });
    this.addBlock({
      object3D: {
        src: new URL('../../../resources/models/test_1.glb', import.meta.url).href,
        splitMeshes: true
      },
      color: 0xc68b52,
      array: [{ type: 'model', size: [7, 1, 7], parts: 27 }],
      pos: [0, 1.02, 0],
      move: true, density: 1, friction: 0.6, restitution: 0.05
    });
    this.addBlock({
      object3D: {
        src: new URL('../../../resources/models/test_2.glb', import.meta.url).href
      },
      color: 0xc68b52,
      array: [{ type: 'model', size: [8.6, 8.6, 8.6], parts: 56 }],
      pos: [0, 3.16,-1],
      move: true, density: 1, friction: 0.6, restitution: 0.05
    });
  }
}
