// Run from the project root: swift scripts/generate-social-preview.swift
import AppKit

let width = 1200
let height = 630
let bitmap = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: width, pixelsHigh: height, bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false, colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
let context = NSGraphicsContext(bitmapImageRep: bitmap)!
NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = context
let cg = context.cgContext
cg.setFillColor(NSColor.black.cgColor)
cg.fill(CGRect(x: 0, y: 0, width: width, height: height))
cg.setStrokeColor(NSColor(white: 0.11, alpha: 1).cgColor)
cg.setLineWidth(1)
for x in stride(from: 0, through: width, by: 75) {
    cg.move(to: CGPoint(x: x, y: 0)); cg.addLine(to: CGPoint(x: x, y: height))
}
for y in stride(from: 0, through: height, by: 75) {
    cg.move(to: CGPoint(x: 0, y: y)); cg.addLine(to: CGPoint(x: width, y: y))
}
cg.strokePath()
// Draw text using top-origin coordinates while retaining native text rendering.
func text(_ value: String, x: CGFloat, top: CGFloat, font: NSFont, color: NSColor) {
    let attributes: [NSAttributedString.Key: Any] = [.font: font, .foregroundColor: color]
    let size = (value as NSString).size(withAttributes: attributes)
    (value as NSString).draw(at: CGPoint(x: x, y: CGFloat(height) - top - size.height), withAttributes: attributes)
}
text("KP", x: 72, top: 48, font: .systemFont(ofSize: 28, weight: .semibold), color: .white)
text("PORTFOLIO", x: 900, top: 55, font: .systemFont(ofSize: 16, weight: .medium), color: NSColor(white: 0.6, alpha: 1))
text("Keith Erwin Mikhail", x: 72, top: 163, font: NSFont(name: "Georgia", size: 66)!, color: .white)
text("Patiño", x: 72, top: 241, font: NSFont(name: "Georgia-Italic", size: 78)!, color: NSColor(white: 0.65, alpha: 1))
text("Web Developer", x: 76, top: 370, font: .systemFont(ofSize: 30, weight: .medium), color: .white)
text("Backend Development  ·  Project Management", x: 76, top: 418, font: .systemFont(ofSize: 23), color: NSColor(white: 0.65, alpha: 1))
cg.setStrokeColor(NSColor(white: 0.3, alpha: 1).cgColor)
cg.move(to: CGPoint(x: 72, y: 105)); cg.addLine(to: CGPoint(x: 1128, y: 105)); cg.strokePath()
text("Iloilo City, Philippines", x: 76, top: 552, font: .systemFont(ofSize: 18), color: NSColor(white: 0.65, alpha: 1))
text("kemgp-portfolio.vercel.app", x: 853, top: 552, font: .systemFont(ofSize: 18), color: .white)
NSGraphicsContext.restoreGraphicsState()
let png = bitmap.representation(using: .png, properties: [:])!
try png.write(to: URL(fileURLWithPath: "public/social-preview.png"))
