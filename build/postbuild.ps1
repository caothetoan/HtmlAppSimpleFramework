Set-Location -Path ..\

Get-Content babylon.math.ts, `
 geom.ts, `
 array1dAs2d.ts, `
 colorBuffer.ts, `
 graphicOutput.ts, `
 htmlCanvasOutput.ts, `
 figure.ts, `
 vertex.ts, `
 face.ts, `
 material.ts, `
 texture.ts, `
 mesh.ts, `
 meshFactory.ts, `
 camera.ts, `
 light.ts, `
 scene.ts, `
 rendererOutput.ts, `
 renderer.ts, `
 renderer2d.ts, `
 renderer3d.ts, `
 imageTransformer.ts, `
 imageEffects.ts, `
 phisics.ts, `
 abstractEvent.ts,
 scanLineData.ts, `
 inputDevice.ts, `
 mouse.ts, `
 htmlMouse.ts, `
 keyboard.ts, `
 htmlKeyboard.ts, `
 inputDevices.ts, `
 app.ts `
 | Out-File build\htmlAppSimpleFramework.ts -Encoding UTF8

 &("C:\Program Files (x86)\Microsoft SDKs\TypeScript\1.7\tsc") --sourceMap build\htmlAppSimpleFramework.ts